let shifts = document.querySelectorAll('.shift');
shifts.forEach(shift => {
  shift.addEventListener('click', () => alteration(shift))
});

function alteration(shift) {
  shift.firstElementChild.classList.toggle('off');
  shift.firstElementChild.classList.toggle('on');
  shift.lastElementChild.classList.toggle('on');
  shift.lastElementChild.classList.toggle('off');
}


let prevScroll = JSON.parse(localStorage.getItem('scrollData'));
if (prevScroll && !sessionStorage.getItem('thereIs')) {
  window.scrollBy(0, +prevScroll);
  localStorage.removeItem('scrollData');
}

window.onunload = () => {
  localStorage.setItem('scrollData', window.pageYOffset + '');
  sessionStorage.setItem('thereIs', 'is')
}