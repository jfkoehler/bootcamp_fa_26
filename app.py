from pathlib import Path
import pickle

import pandas as pd
import streamlit as st


st.set_page_config(
    page_title="Predictive Maintenance",
    page_icon="🛠️",
    layout="centered",
)

st.title("Predictive Maintenance Decision Tool")
st.write(
    "Enter the current operating conditions for a machine. "
    "The app estimates failure risk and applies the maintenance "
    "threshold selected from the validation-set profit curve."
)


@st.cache_resource
def load_model_bundle():
    with open("predictive_maintenance_model.pkl", "rb") as file:
        return pickle.load(file)


bundle = load_model_bundle()
model = bundle["model"]
threshold = bundle["threshold"]


with st.sidebar:
    st.header("Policy assumptions")
    st.metric("Maintenance cost", f"${bundle['maintenance_cost']:,.0f}")
    st.metric("Failure cost", f"${bundle['failure_cost']:,.0f}")
    st.metric(
        "Maintenance effectiveness",
        f"{bundle['maintenance_effectiveness']:.0%}",
    )
    st.caption(f"Model: {bundle['model_name']}")


with st.form("machine_inputs"):
    machine_type = st.selectbox(
        "Product quality type",
        ["L", "M", "H"],
    )

    air_temperature = st.slider(
        "Air temperature (K)",
        min_value=295.0,
        max_value=305.0,
        value=300.0,
        step=0.1,
    )

    process_temperature = st.slider(
        "Process temperature (K)",
        min_value=305.0,
        max_value=315.0,
        value=310.0,
        step=0.1,
    )

    rotational_speed = st.slider(
        "Rotational speed (rpm)",
        min_value=1100,
        max_value=3000,
        value=1500,
        step=10,
    )

    torque = st.slider(
        "Torque (Nm)",
        min_value=0.0,
        max_value=80.0,
        value=40.0,
        step=0.5,
    )

    tool_wear = st.slider(
        "Tool wear (minutes)",
        min_value=0,
        max_value=260,
        value=100,
        step=1,
    )

    submitted = st.form_submit_button("Evaluate machine")


if submitted:
    machine = pd.DataFrame({
        "Type": [machine_type],
        "Air temperature [K]": [air_temperature],
        "Process temperature [K]": [process_temperature],
        "Rotational speed [rpm]": [rotational_speed],
        "Torque [Nm]": [torque],
        "Tool wear [min]": [tool_wear],
    })

    failure_probability = model.predict_proba(machine)[0, 1]
    recommend_maintenance = failure_probability >= threshold

    left, right = st.columns(2)
    left.metric("Predicted failure risk", f"{failure_probability:.1%}")
    right.metric("Policy threshold", f"{threshold:.1%}")

    if recommend_maintenance:
        st.warning("Recommendation: perform preventive maintenance.")
    else:
        st.success("Recommendation: continue operating and monitor.")

    st.progress(min(float(failure_probability), 1.0))

    with st.expander("How the decision was made"):
        st.write(
            "Machines are ranked by model score. The threshold was selected "
            "on validation data to maximize incremental profit under the "
            "hypothetical maintenance assumptions shown in the sidebar."
        )
