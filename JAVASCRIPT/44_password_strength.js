// 44. To calculate strength of the password string using some predefined rules given in the question

const calculatePasswordStrength = password => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
};

const password = "P@ssw0rd!";
console.log(calculatePasswordStrength(password));