# Class 1 Google Form setup

The script in this folder creates the Class 1 exit-ticket form and a linked Google Sheet. Student names, email addresses, and responses stay in the instructor's Google Drive and are not stored in the course repository.

## Create the form

1. Open [Google Apps Script](https://script.google.com) while signed into the Google account that should own the responses.
2. Create a new project named `Data Bootcamp Forms`.
3. Delete the example function in the editor.
4. Copy the contents of `create_class01_exit_ticket.gs` into the editor and save it.
5. Select `createClass01ExitTicket` in the function menu and click **Run**.
6. Approve the Google Forms and Google Sheets permissions. If Google displays an unverified-app warning, confirm that the script is your own project before continuing.
7. Open the execution log and copy the three URLs printed by the script:
   - student form URL;
   - form edit URL; and
   - response spreadsheet URL.
8. Open the form's edit URL to review its settings and appearance.
9. Replace `https://forms.gle/REPLACE_WITH_CLASS01_FORM` in `class01.ipynb` with the student form URL.

Run the function only once. Each run creates a separate form and response spreadsheet.

## Before sharing with students

- Submit one test response and confirm that it appears in the linked spreadsheet.
- Confirm whether students outside your Google Workspace may respond.
- Keep the response spreadsheet private to the instructional team.
- Use the form's **Responses** control to stop accepting submissions after the deadline if desired.
