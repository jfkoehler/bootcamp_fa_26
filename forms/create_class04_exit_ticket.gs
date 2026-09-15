/**
 * Creates the Class 4 exit-ticket Google Form and a linked response sheet.
 *
 * Run createClass04ExitTicket() once from https://script.google.com.
 * Authorize the requested Google Forms and Sheets permissions when prompted.
 * The execution log will contain the student URL, edit URL, and spreadsheet URL.
 */
function createClass04ExitTicket() {
  const form = FormApp.create('Data Bootcamp — Class 4 Exit Ticket');

  form
    .setDescription(
      'Submit this form individually before leaving class. The questions review ' +
      'column selection, conditional filtering, grouped summaries, and responsible business interpretation.'
    )
    .setCollectEmail(true)
    .setProgressBar(true)
    .setConfirmationMessage(
      'Your response has been recorded. Before Class 5, review selecting columns, ' +
      'combining conditions, and interpreting grouped response rates.'
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
    .setTitle('Which expression selects the age, job, and y columns from bank?')
    .setChoiceValues([
      'bank[["age", "job", "y"]]',
      'bank["age", "job", "y"]',
      'bank("age", "job", "y")',
      'bank["age":"y"]'
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('Which operator combines two pandas filtering conditions using AND?')
    .setChoiceValues([
      '&',
      'and',
      '&&',
      '+'
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Write a pandas filter')
    .setHelpText(
      'Write code that selects clients from bank who are at least 50 years old, ' +
      'have a balance greater than 1500, and have no personal loan.'
    )
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('What does groupby() help an analyst do?')
    .setChoiceValues([
      'Split rows into categories and calculate summaries for each category',
      'Download a CSV file from the internet',
      'Rename every column in a DataFrame',
      'Convert a DataFrame into a Python string'
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('What does the mean of the Boolean subscribed column represent?')
    .setChoiceValues([
      'The proportion of clients in the group who subscribed',
      'The total number of clients in the group',
      'The median number of subscriptions',
      'The largest client balance in the group'
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Interpret a grouped result')
    .setHelpText(
      'Suppose one job group has a higher observed subscription rate than another. ' +
      'What can you reasonably conclude, and what can you not conclude?'
    )
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Campaign manager recommendation')
    .setHelpText(
      'State one pattern you observed in the bank-marketing data, one limitation ' +
      'or possible confounder, and one analysis the campaign manager should perform next.'
    )
    .setRequired(true);

  form
    .addScaleItem()
    .setTitle('How confident are you that you can select, filter, and group pandas data independently?')
    .setBounds(1, 5)
    .setLabels('1 — I need guided help', '5 — I can do this independently')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('What pandas concept remains least clear?')
    .setHelpText('Name the concept and briefly explain what is confusing.')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Optional: Paste an exact pandas or Python error message you want help with.')
    .setHelpText(
      'Include the complete message when possible, but do not include a password or access token.'
    )
    .setRequired(false);

  const responses = SpreadsheetApp.create(
    'Data Bootcamp — Class 4 Exit Ticket Responses'
  );
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responses.getId());

  console.log('Student form URL: ' + form.getPublishedUrl());
  console.log('Form edit URL: ' + form.getEditUrl());
  console.log('Response spreadsheet URL: ' + responses.getUrl());
}
