var waterCheck = document.getElementsByClassName("fa fa-check-circle-o");
var waterUncheck = document.getElementsByClassName("fa fa-check-circle")
var trash = document.getElementsByClassName("fa-trash-o");

Array.from(waterCheck).forEach(function(element) {
      element.addEventListener('click', function(){
        const plantName = this.parentNode.parentNode.childNodes[1].innerText
        fetch('updating', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'plantName': plantName
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(waterUncheck).forEach(function(element) {
  element.addEventListener('click', function(){
    const plantName = this.parentNode.parentNode.childNodes[1].innerText
    fetch('unchecking', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'plantName': plantName
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages2', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbUp':thumbUp
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const plantName = this.parentNode.parentNode.childNodes[1].innerText
        fetch('updating', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'plantName': plantName
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
