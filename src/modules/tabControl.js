function resetPage(){
  const contentSection = document.getElementById('content');
  contentSection.textContent = "";

  const navButtons = document.querySelectorAll('#navbar button');
  navButtons.forEach(button => {
    button.classList.remove('active-tab');
  });
}


export { resetPage };