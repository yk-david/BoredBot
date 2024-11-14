document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      const activity = document.getElementById("activity")
      const colors = ['red', 'gold', 'dark', 'gray', 'lightblue', 'green', 'purple']
      const randomColorIndex = Math.floor(Math.random() * colors.length) + 1

      activity.textContent = data.activity
      activity.classList.add('custom-style')
      document.querySelector('button').style.backgroundColor = colors[randomColorIndex]
    })
})