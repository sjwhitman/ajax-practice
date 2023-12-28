function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    salary: document.querySelector('[name="salary"]').value,
    education: document.querySelector('[name="education"]').value,
    state: document.querySelector('#state-field').value,
    state: document.querySelector('[name="city"]').value,
    state: document.querySelector('[name="garden"]').value,
    state: document.querySelector('[name="tv"]').value

  };
  //console.log(data);
  newStr = `${data.name}, your age is ${data.age} and your occupation is ${data.occupation}`
  
  document.querySelector('#profiles').append(newStr)
};


document.querySelector('#profile-form').addEventListener('submit', submitProfile);
