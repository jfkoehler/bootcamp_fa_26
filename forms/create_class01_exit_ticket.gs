/**
 * Creates the Class 1 exit-ticket Google Form and a linked response sheet.
 *
 * Run createClass01ExitTicket() once from https://script.google.com.
 * Authorize the requested Google Forms and Sheets permissions when prompted.
 * The execution log will contain the student URL, edit URL, and spreadsheet URL.
 */
function createClass01ExitTicket() {
  const form = FormApp.create('Data Bootcamp — Class 1 Exit Ticket');

  form
    .setDescription(
      'Submit this form individually before leaving class. Use your own words, ' +
      'even when your answers draw on your team discussion.'
    )
    .setCollectEmail(true)
    .setProgressBar(true)
    .setConfirmationMessage(
      'Your response has been recorded. Before Class 2, complete the software ' +
      'installation checklist in the course book.'
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
    .setTitle('Which scenario did your team analyze?')
    .setChoiceValues([
      'A — Federal Reserve business conditions',
      'B — UCI Bank Marketing',
      'C — Coffee-shop operations'
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Business Understanding')
    .setHelpText(
      'Who is the stakeholder, what specific decision must they make, and what outcome defines success?'
    )
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Data Understanding')
    .setHelpText(
      'What does one row represent, which fields are most useful, and what is the most important limitation?'
    )
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Analytical Direction')
    .setHelpText(
      'Is the task descriptive, predictive, causal, or optimization? What would you analyze first, and what output would you provide?'
    )
    .setRequired(true);

  form
    .addScaleItem()
    .setTitle('How confident are you that your challenge is decision ready?')
    .setBounds(1, 5)
    .setLabels('1 — Needs substantial clarification', '5 — Ready for analysis')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Optional: What remains unclear about the course or today\'s class?')
    .setRequired(false);

  const responses = SpreadsheetApp.create(
    'Data Bootcamp — Class 1 Exit Ticket Responses'
  );
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responses.getId());

  console.log('Student form URL: ' + form.getPublishedUrl());
  console.log('Form edit URL: ' + form.getEditUrl());
  console.log('Response spreadsheet URL: ' + responses.getUrl());
}
