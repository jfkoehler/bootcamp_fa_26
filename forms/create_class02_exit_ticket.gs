/**
 * Creates the Class 2 exit-ticket Google Form and a linked response sheet.
 *
 * Run createClass02ExitTicket() once from https://script.google.com.
 * Authorize the requested Google Forms and Sheets permissions when prompted.
 * The execution log will contain the student URL, edit URL, and spreadsheet URL.
 */
function createClass02ExitTicket() {
  const form = FormApp.create('Data Bootcamp — Class 2 Exit Ticket');

  form
    .setDescription(
      'Submit this form individually before leaving class. Use it to confirm ' +
      'your technology setup and reflect on today\'s Unix and Git workflow.'
    )
    .setCollectEmail(true)
    .setProgressBar(true)
    .setConfirmationMessage(
      'Your response has been recorded. In Class 3, we will begin Python and pandas. ' +
      'Keep a copy of any exact setup or Git error message so that we can troubleshoot it.'
    )
    .setAcceptingResponses(true);

  form
    .addTextItem()
    .setTitle('Full name')
    .setRequired(true);

  form
    .addTextItem()
    .setTitle('Course section')
    .setHelpText('Enter your section number or meeting time.')
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('Which terminal did you use today?')
    .setChoiceValues([
      'Git Bash on Windows',
      'Terminal on macOS',
      'Another Unix-style terminal',
      'I was not able to open a working terminal'
    ])
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle('Which course systems can you access successfully?')
    .setHelpText('Select every system you successfully accessed today.')
    .setChoiceValues([
      'Brightspace',
      'Slack',
      'GitHub',
      'Google Colab'
    ])
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle('Which tools are working on your computer?')
    .setHelpText(
      'Select every tool you verified. Leave an item unchecked if it is not installed or did not run successfully.'
    )
    .setChoiceValues([
      'Visual Studio Code',
      'Git',
      'Python 3',
      'Jupyter Notebook'
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Shell workflow check')
    .setHelpText(
      'Write the commands you would use to: (1) print your current directory, ' +
      '(2) list the contents of class02_sandbox/data, (3) create class02_sandbox/output, ' +
      'and (4) copy sales.csv into that output folder.'
    )
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('Which sequence correctly records and synchronizes one specific changed file?')
    .setChoiceValues([
      'git status → git diff → git add <file> → git status → git commit -m "message" → git push',
      'git push → git add <file> → git commit -m "message" → git status',
      'git commit -m "message" → git diff → git add <file> → git pull',
      'git add . → git push → git status → git diff'
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Git workflow evidence')
    .setHelpText(
      'Describe the file you changed and the commit message you used today. If you were unable to commit, identify the step where you stopped.'
    )
    .setRequired(true);

  form
    .addScaleItem()
    .setTitle('How confident are you that you can repeat today\'s shell and Git workflow independently?')
    .setBounds(1, 5)
    .setLabels('1 — I need guided help', '5 — I can repeat it independently')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('What command or Git step is least clear to you?')
    .setHelpText('Name the command or step and briefly explain what is confusing.')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Optional: Paste an exact setup, terminal, or Git error message you want help with.')
    .setHelpText('Include the complete message when possible, but do not include a password or access token.')
    .setRequired(false);

  const responses = SpreadsheetApp.create(
    'Data Bootcamp — Class 2 Exit Ticket Responses'
  );
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responses.getId());

  console.log('Student form URL: ' + form.getPublishedUrl());
  console.log('Form edit URL: ' + form.getEditUrl());
  console.log('Response spreadsheet URL: ' + responses.getUrl());
}
