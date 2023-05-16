const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

let symlist = ['itching',
'skin rash',
'nodal skin eruptions',
'continuous sneezing',
'shivering',
'chills',
'joint pain',
'stomach pain',
'acidity',
'ulcers on tongue',
'muscle wasting',
'vomiting',
'burning micturition',
'spotting urination',
'fatigue',
'weight gain',
'anxiety',
'cold hands and feets',
'mood swings',
'weight loss',
'restlessness',
'lethargy',
'patches in throat',
'irregular sugar level',
'cough',
'high fever',
'sunken eyes',
'breathlessness',
'sweating',
'dehydration',
'indigestion',
'headache',
'yellowish skin',
'dark urine',
'nausea',
'loss of appetite',
'pain behind the eyes',
'back pain',
'constipation',
'abdominal pain',
'diarrhoea',
'mild fever',
'yellow urine',
'yellowing of eyes',
'acute liver failure',
'fluid overload',
'swelling of stomach',
'swelled lymph nodes',
'malaise',
'blurred and distorted vision',
'phlegm',
'throat irritation',
'redness of eyes',
'sinus pressure',
'runny nose',
'congestion',
'chest pain',
'weakness in limbs',
'fast heart rate',
'pain during bowel movements',
'pain in anal region',
'bloody stool',
'irritation in anus',
'neck pain',
'dizziness',
'cramps',
'bruising',
'obesity',
'swollen legs',
'swollen blood vessels',
'puffy face and eyes',
'enlarged thyroid',
'brittle nails',
'swollen extremeties',
'excessive hunger',
'extra marital contacts',
'drying and tingling lips',
'slurred speech',
'knee pain',
'hip joint pain',
'muscle weakness',
'stiff neck',
'swelling joints',
'movement stiffness',
'spinning movements',
'loss of balance',
'unsteadiness',
'weakness of one body side',
'loss of smell',
'bladder discomfort',
'foul smell of urine',
'continuous feel of urine',
'passage of gases',
'internal itching',
'toxic look (typhos)',
'depression',
'irritability',
'muscle pain',
'altered sensorium',
'red spots over body',
'belly pain',
'abnormal menstruation',
'dischromic  patches',
'watering from eyes',
'increased appetite',
'polyuria',
'family history',
'mucoid sputum',
'rusty sputum',
'lack of concentration',
'visual disturbances',
'receiving blood transfusion',
'receiving unsterile injections',
'coma',
'stomach bleeding',
'distention of abdomen',
'history of alcohol consumption',
'fluid overload.1',
'blood in sputum',
'prominent veins on calf',
'palpitations',
'painful walking',
'pus filled pimples',
'blackheads',
'scurring',
'skin peeling',
'silver like dusting',
'small dents in nails',
'inflammatory nails',
'blister',
'red sore around nose',
'yellow crust ooze'];

symlist.sort();

symlist.forEach(function(item) {
	let o = document.createElement("option");
	o.text = item;
	o.value = item;
	symptoms.appendChild(o);
});

getsym.onsubmit = function(e) {
	e.preventDefault();
	var liss = [];
	for(var option of document.getElementById('symptoms').options){
		if(option.selected) {
			liss.push(option.value);
		}
	}
	let passarg = liss.join();
	localStorage.setItem("myargument", passarg);
	document.location.href="results.html";
	return false;
}
