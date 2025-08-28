function volume_sphere() {
    //Write your code here
	const radius = document.getElementById("radius").value;
	const r = parseFloat(radius);
	let volume;
	if (isNaN(r) || r < 0) {
		volume = NaN;
		} else {
		volume = (4 / 3) * Math.PI * Math.pow(r, 3);
		volume = volume.toFixed(4);
		 }
	document.getElementById("volume").value = volume;
	return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
