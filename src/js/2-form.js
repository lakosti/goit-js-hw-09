const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmit);
form.addEventListener('input', onInput);

function onSubmit(evt) {
  evt.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Please, fill in all fields before sending!');
    return;
  }
  const data = { email: email, message: message };
  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}

function onInput() {
  const value = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

function saveInfoFromStorage() {
  const info = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  form.elements.email.value = info.email || '';
  form.elements.message.value = info.message || '';
}

saveInfoFromStorage();
