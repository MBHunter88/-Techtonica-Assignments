// First up, let's create a new list item and store it in a variable.
// var newListItem = document.createElement('li');

// // Now let's update the text content of that list item.
// newListItem.textContent = 'Love';

// // And finally, let's add that list item as a child of the ul.
// document.querySelector('ul').appendChild(newListItem);

// create variable for the ul and each list item
const ingList = document.getElementById('ingredient-list');
const items = ingList.getElementsByTagName('li');
// loop through list
for (let i = 0; i < items.length; i++) {
  // create checkbox and assign the value to items
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'ingredient';
  // this assigns the checkbox to each text of the item on the list
  checkbox.value = items[i].textContent;

  // add label to the checkbox
  const label = document.createElement('label');
  label.htmlFor = 'ingredient' + i;
  label.style.marginLeft = '10px';
  label.appendChild(document.createTextNode('  ')); // to have a space b/t box and text

  // how to add checkboxes before each item instead of appendeding to end of list?
  // ingList.appendChild(checkbox);
  // ingList.appendChild(label);

  // add event listene to checkbox
  checkbox.addEventListener('change', function () {
    // add condition if checked
    if (checkbox.checked) {
      // tried to use class name googgle more efficient name to both account for when clicked and unclicked
      items[i].classList.add('checked');
    } else {
      items[i].classList.remove('checked');
    }
  });

  // found method insertBefore() that will add a checbox to each iteration of ol
  items[i].insertBefore(checkbox, items[i].firstChild);
  items[i].insertBefore(label, items[i].firstChild);
}

// dark/light toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleModeButton = document.getElementById('toggle-mode');

  toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
// Handle Review Form Submission
document.getElementById('review-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('reviewer-name').value;
  const rating = document.getElementById('review-rating').value;
  const comments = document.getElementById('review-comments').value;

  // Create review element
  const reviewItem = document.createElement('li');
  reviewItem.innerHTML = `
        <h4>${name} - Rating: ${rating}/5</h4>
        <small>${new Date().toLocaleString()}</small>
        <p>${comments}</p>
    `;

  // Add review to the list
  document.getElementById('reviews-list').appendChild(reviewItem);

  // Reset the form
  document.getElementById('review-form').reset();
});
