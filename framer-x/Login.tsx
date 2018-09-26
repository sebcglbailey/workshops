import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    username: "username",
    password: "password",
    usernameValue: "",
    passwordValue: "",
    ready: false,
    usernameFail: false,
    passwordFail: false,
    usernamePass: false,
    passwordPass: false
})

export const ErrorMessage: Override = props => {
    return {
        opacity: data.usernameFail || data.passwordFail ? 1 : 0
    }
}

export const CheckUsername: Override = props => {
    return {
        textColor: data.usernamePass && data.passwordPass ? "#27D600" : "#FFFFFF",
        onValueChange(value) {
            data.usernameValue = value
            if (value.length > 0 && data.passwordValue.length > 0) {
                data.ready = true
            } else {
                data.ready = false
            }
        }
    }
}

export const CheckPassword: Override = props => {
    return {
        textColor: data.passwordPass && data.usernamePass ? "#27D600" : "#FFFFFF",
        onValueChange(value) {
            data.passwordValue = value
            if (value.length > 0 && data.usernameValue.length > 0) {
                data.ready = true
            } else {
                data.ready = false
            }
        }
    }
}

export const CheckInputs: Override = props => {
    return {
        background: data.ready ? "#ffffff" : "rgba(255,255,255,0.2)",
        onTap() {
            if (data.usernameValue !== data.username) {
                data.usernameFail = true
                data.usernamePass = false
            } else {
                data.usernameFail = false
                data.usernamePass = true
            }

            if (data.passwordValue !== data.password) {
                data.passwordFail = true
                data.passwordPass = false
            } else {
                data.passwordFail = false
                data.passwordPass = true
            }
        }
    }
}
