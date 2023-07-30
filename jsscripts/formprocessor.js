function radioGender() {
    if (document.getElementById('male').checked) {
        return 'Male';
    }
    else if (document.getElementById('female').checked) {
        return 'Female';
    }
    else {
        return 'not christian';
    }
}

function radioMembership() {
    if (document.getElementById('copper').checked) {
        return 'Copper Membership';
    }
    else if (document.getElementById('iron').checked) {
        return 'Iron Membership';
    }
    else if (document.getElementById('gold').checked) {
        return 'Gold Membership';
    }
    else if (document.getElementById('diamond').checked) {
        return 'Diamond Membership';
    }
}

function collectAndStoreInput() {
    let first_Name_Input = document.getElementById('firstname');
    var fName = first_Name_Input.value;
    let last_Name_Input = document.getElementById('lastname');
    var lName = last_Name_Input.value;
    let gender_Input = radioGender();
    let age_Input = document.getElementById('age');
    var age = age_Input.value;
    let email_Input = document.getElementById('email');
    var email = email_Input.value;
    let country_Input = document.getElementById('country');
    var country = country_Input.value;
    let membership_Input = radioMembership()
    let commitment_Input = document.getElementById('commitperiod');
    var commitment = commitment_Input.value;
    let explanation_Input = document.getElementById('explanation');
    var explanation = explanation_Input.value;
    sessionStorage.setItem('fname', fName);
    sessionStorage.setItem('lname', lName);
    sessionStorage.setItem('gender', gender_Input);
    sessionStorage.setItem('age', age);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('country', country);
    sessionStorage.setItem('membership', membership_Input);
    sessionStorage.setItem('commitment', commitment);
    sessionStorage.setItem('explanation', explanation);
}

function writeResponse() {
    const first_Name = sessionStorage.getItem('fname');
    const last_Name = sessionStorage.getItem('lname');
    const gender = sessionStorage.getItem('gender');
    const age = sessionStorage.getItem('age');
    const email = sessionStorage.getItem('email');
    const country = sessionStorage.getItem('country');
    const membership = sessionStorage.getItem('membership');
    const commitment = sessionStorage.getItem('commitment');
    const explanation = sessionStorage.getItem('explanation');

    document.getElementById('fname-webpage').innerText = first_Name;
    document.getElementById('lname-webpage').innerText = last_Name;
    document.getElementById('gender-webpage').innerText = gender;
    document.getElementById('age-webpage').innerText = age;
    document.getElementById('email-webpage').innerText = email;
    document.getElementById('countries-webpage').innerText = country;
    document.getElementById('membership-webpage').innerText = membership;
    document.getElementById('commitment-webpage').innerText = commitment;
    document.getElementById('reason-webpage').innerText = explanation;
}
