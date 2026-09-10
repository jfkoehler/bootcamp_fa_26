/**
 * Creates the Class 3 exit-ticket Google Form and a linked response sheet.
 *
 * Run createClass03ExitTicket() once from https://script.google.com.
 * Authorize the requested Google Forms and Sheets permissions when prompted.
 * The execution log will contain the student URL, edit URL, and spreadsheet URL.
 */
function createClass03ExitTicket() {
  const form = FormApp.create('Data Bootcamp — Class 3 Exit Ticket');

  form
    .setDescription(
      'Submit this form individually before leaving class. The questions review ' +
      'Python variables and collections, the local Git workflow, and introductory pandas.'
    )
    .setCollectEmail(true)
    .setProgressBar(true)
    .setConfirmationMessage(
      'Your response has been recorded. Continue practicing the edit, inspect, ' +
      'stage, and commit workflow, and keep your Class 3 pandas notebook.'
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
    .setTitle('What is the Python data type of the value "4200"?')
    .setChoiceValues([
      'Integer',
      'Float',
      'String',
      'Boolean'
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('Which collection is most appropriate for storing several menu items in order?')
    .setChoiceValues([
      'List',
      'Dictionary',
      'String',
      'Boolean'
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Variables and collections')
    .setHelpText(
      'Write Python code that creates a list containing three menu items and a ' +
      'dictionary containing a store name, revenue, and number of transactions.'
    )
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('Which sequence correctly inspects, stages, and records a change with Git?')
    .setChoiceValues([
      'git diff → git add <file> → git commit -m "message"',
      'git add <file> → git commit -m "message" → git diff',
      'git commit -m "message" → git diff → git add <file>',
      'git diff → git commit -m "message" → git add <file>'
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Explain the Git workflow')
    .setHelpText(
      'In your own words, explain the purpose of git diff, git add, and git commit.'
    )
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('Which pandas command displays the first five rows of a DataFrame named coffee?')
    .setChoiceValues([
      'coffee.head()',
      'coffee.info()',
      'coffee.shape',
      'coffee.columns'
    ])
    .setRequired(true);

  form
    .addTextItem()
    .setTitle('Write one line of pandas code that selects the revenue_usd column from coffee.')
    .setHelpText('Enter only the line of code.')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Data understanding')
    .setHelpText(
      'What does one row in the coffee-shop dataset represent, and what is one limitation of the data?'
    )
    .setRequired(true);

  form
    .addScaleItem()
    .setTitle('How confident are you that you can repeat today\'s Python, Git, and pandas activities independently?')
    .setBounds(1, 5)
    .setLabels('1 — I need guided help', '5 — I can repeat them independently')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('What Python, Git, or pandas concept remains least clear?')
    .setHelpText('Name the concept and briefly explain what is confusing.')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Optional: Paste an exact Python or Git error message you want help with.')
    .setHelpText(
      'Include the complete message when possible, but do not include a password or access token.'
    )
    .setRequired(false);

  const responses = SpreadsheetApp.create(
    'Data Bootcamp — Class 3 Exit Ticket Responses'
  );
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responses.getId());

  console.log('Student form URL: ' + form.getPublishedUrl());
  console.log('Form edit URL: ' + form.getEditUrl());
  console.log('Response spreadsheet URL: ' + responses.getUrl());
}
