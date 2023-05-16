let passer = localStorage.getItem("myargument");
const formData = new FormData();

formData.append("symptom", passer);
async function postJSON() {
    try {
      const response = await fetch("https://trivendrasingh.pythonanywhere.com/predict", {
        method: "POST",
        body: formData
      });
  
      const result = await response.json();
      document.getElementById("myresult").innerHTML = result['Prediction'];
      document.getElementById("preone").innerHTML = result['Precaution_1'];
      document.getElementById("pretwo").innerHTML = result['Precaution_2'];
      document.getElementById("prethr").innerHTML = result['Precaution_3'];
      document.getElementById("prefor").innerHTML = result['Precaution_4'];
    } catch (error) {
      console.error("Error:", error);
    }
  }


window.onload = postJSON();
  