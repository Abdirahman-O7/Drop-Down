document.addEventListener('DOMContentLoaded', () => {
    const projectInfos = document.querySelectorAll('[project-info')
    const expandButtons = document.querySelectorAll('[expand-button]')
  
    projectInfos.forEach(theContent => theContent.hidden = true)
  
    function showAndHide() {
      const theContent = document.getElementById(this.dataset.target)
  
      if(theContent.hidden === true) {
        theContent.hidden = false
        theContent.style.height = 'auto'
        this.innerHTML = 'Show Less..'
      } else {
        theContent.hidden = true
        theContent.style.height = '10px'
        this.innerHTML = 'Show More...'
      }
  
    }
  
    expandButtons.forEach(expandButton => expandButton.addEventListener('click', showAndHide))
    
  })