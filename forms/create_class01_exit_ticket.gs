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
      'A — Restaurant delivery',
      'B — Consumer lending',
      'C — Retail promotion'
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Decision statement')
    .setHelpText(
      'Who is the stakeholder, what specific decision must they make, and by when?'
    )
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Most decision-relevant data')
    .setHelpText(
      'Identify the most useful available data and explain what one row or observation represents.'
    )
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Most important data limitation')
    .setHelpText(
      'What is missing, unreliable, selected, or unavailable at the time of the decision?'
    )
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('What is the primary analytical task?')
    .setChoiceValues([
      'Describe or compare what happened',
      'Predict an unknown or future outcome',
      'Estimate the effect of an action',
      'Optimize a decision under constraints',
      'Not yet clear'
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Proposed first analysis and deliverable')
    .setHelpText(
      'What would you analyze first, what would the stakeholder receive, and how would it support the decision?'
    )
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('Question for the stakeholder')
    .setHelpText('What must you clarify before beginning the analysis?')
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
