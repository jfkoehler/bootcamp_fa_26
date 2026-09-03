# Data Bootcamp — Fall 2026

This repository contains the source for the Data Bootcamp Jupyter Book.

## Build locally

Create and activate a Python environment, then install the book dependency:

```bash
python -m pip install -r requirements.txt
```

Build the HTML site from the repository root:

```bash
jupyter-book build .
```

The generated site will be in `_build/html`. Open `_build/html/index.html` in a browser to inspect it.

To remove generated files before rebuilding:

```bash
jupyter-book clean .
jupyter-book build .
```

## Add a class

1. Add the notebook or Markdown file to the repository.
2. Add its filename without the extension to `_toc.yml`.
3. Build the book and review any warnings.

Notebook execution is disabled during the book build. This prevents instructional Bash exercises from creating files automatically; students can still run notebook cells interactively.

## Connect the GitHub repository

After creating the repository:

1. Replace `USERNAME/REPOSITORY` in `_config.yml` with the real GitHub path.
2. Push the files to the `main` branch.
3. In the GitHub repository, open **Settings → Pages** and choose **GitHub Actions** as the source.
4. The included workflow will build and publish the book after each push to `main`.

The deployed address will normally be:

```text
https://USERNAME.github.io/REPOSITORY/
```
