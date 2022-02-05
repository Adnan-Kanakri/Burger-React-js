import validator from "validator";
export const validName = (value) => {
    let {
        role1, role2, role3, role4
    } = true
    role1 = validator.isLowercase(value);
    role2 = validator.isAlpha(value);
    role3 = validator.isLength(value, {
        max: 6,
        min: 3
    });
    role4 = validator.trim(value) !== "";
    if (role1 && role2 && role3 && role4) {
        return true
    } else {
        return false;
    }
}
export const validEmail = (value) => {
    let {
        role1, role2, role3, role4
    } = true
    role1 = validator.isLowercase(value);
    role2 = validator.isAlpha(value);
    role3 = validator.isEmail(value);
    role4 = validator.trim(value) !== " ";
    if (role1 && role2 && role3 && role4) {
        return true
    } else {
        return false;
    }
}

export const validStreet = (value) => {
    let {
        role1, role2, role3, role4
    } = true
    role1 = validator.isLowercase(value);
    role2 = validator.isAlpha(value);
    role3 = validator.isLength(value, {
        max: 6,
        min: 3
    });
    role4 = validator.trim(value) !== " ";
    if (role1 && role2 && role3 && role4) {
        return true
    } else {
        return false;
    }
}

export const validZipCode = (value) => {
    let {
        role1, role3, role4
    } = true
    role1 = validator.isNumeric(value);
    role3 = validator.isLength(value, {
        max: 6,
        min: 3
    });
    role4 = validator.trim(value);
    if (role1 && role3 && role4) {
        return true
    } else {
        return false;
    }
}

export const validCountry = (value) => {
    let {
        role1, role2, role4
    } = true
    role1 = validator.isLowercase(value);
    role2 = validator.isAlpha(value);
    role4 = validator.trim(value) !== " ";
    if (role1 && role2 && role4) {
        return true
    } else {
        return false;
    }
}
