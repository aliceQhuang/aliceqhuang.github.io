var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}



/* Other page functions */

function expand_all() {
  document.getElementById('Qualifications Summary').style.display = '';
  document.getElementById('Qualifications Summary +').style.color = '#f000f0';
  document.getElementById('Work Experience').style.display = '';
  document.getElementById('Work Experience +').style.color = '#f000f0';
  document.getElementById('Education').style.display = '';
  document.getElementById('Education +').style.color = '#f000f0';
  document.getElementById('Personal Projects').style.display = '';
  document.getElementById('Personal Projects +').style.color = '#f000f0';
  document.getElementById('Volunteer Experience').style.display = '';
  document.getElementById('Volunteer Experience +').style.color = '#f000f0';
  document.getElementById('Awards & Achievements').style.display = '';
  document.getElementById('Awards & Acheivements +').style.color = '#f000f0';
  return false;
}
function collapse_all() {
  document.getElementById('Qualifications Summary').style.display = 'none';
  document.getElementById('Qualifications Summary +').style.color = '#5f5f5f';
  document.getElementById('Work Experience').style.display = 'none';
  document.getElementById('Work Experience +').style.color = '#5f5f5f';
  document.getElementById('Education').style.display = 'none';
  document.getElementById('Education +').style.color = '#5f5f5f';
  document.getElementById('Personal Projects').style.display = 'none';
  document.getElementById('Personal Projects +').style.color = '#5f5f5f';
  document.getElementById('Volunteer Experience').style.display = 'none';
  document.getElementById('Volunteer Experience +').style.color = '#5f5f5f';
  document.getElementById('Awards & Achievements').style.display = 'none';
  document.getElementById('Awards & Acheivements +').style.color = '#5f5f5f';
  return false;
}
