const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jill Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'New York NY',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Billy Bob',
    age: 41,
    gender: 'male',
    lookingfor: 'female',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/7.jpg'
  }
];

const profiles = profileIterator(data);
nextProfile();
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (true) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
  `;
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
    }
  };
}
