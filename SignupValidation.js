function Validation(values) {
    let error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    // ✅ Name Validation
    if (!values.name) {
        error.name = "Name should not be empty";
    } else {
        error.name = "";
    }

    // ✅ Email Validation
    if (!values.email) {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is invalid";
    } else {
        error.email = "";
    }

    // ✅ Password Validation
    if (!values.password) {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain at least 1 uppercase, 1 lowercase and be 8+ characters";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;
