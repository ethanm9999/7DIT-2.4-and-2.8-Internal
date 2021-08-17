<<<<<<< HEAD
function updateClock(){
  var now = new Date();
  var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear();

      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var ids = ["dayname", "month", "daynum", "year"];
      var values = [week[dname], months[mo], dnum, yr];
      for(var i = 0; i < ids.length; i++)
      document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
  updateClock();
  window.setInterval("updateClock()", 1);
}
=======
function formatDate(dateObject) {
  const parts = {
    date: dateObject.getDate(),
    month: dateObject.getMonth() + 1,
    year: dateObject.getFullYear(),
  };

  return `${parts.date}/${parts.month}/${parts.year}`
}

const dayJsObject = dayjs();

console.log(dayJsObject.format("D/M/YYYY"));
>>>>>>> da72432eb811abf6b78cf6f92cbd6c505072c452
