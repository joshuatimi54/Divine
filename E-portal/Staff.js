/**
* Namespace that wraps main MVC site login for Recruit.
* @module
*/
var Ellucian;
(function (Ellucian) {
    var Recruit;
    (function (Recruit) {
        var Mvc;
        (function (Mvc) {
            var Login;
            (function (Login) {
                /**
                 * Toggles the show/hide password feature by switching the input type of that field.
                 */
                function LoginSetup() {
                    //Show/Hide PW button
                    $("#recruit-login-showhide").click(function (e) {
                        if ($("#Password").attr("type") == "password") {
                            $("#Password").attr("type", "text");
                            $("#recruit-login-showhide").text(Ellucian.Recruit.Mvc._WR("MVC_HidePassword_Text"));
                        }
                        else {
                            $("#Password").attr("type", "password");
                            $("#recruit-login-showhide").text(Ellucian.Recruit.Mvc._WR("MVC_ShowPassword_Text"));
                        }
                        e.preventDefault();
                    });
                    $("#recruit-login-showhide").keydown(function (event) {
                        if (event.keyCode === 13) { //Enter Key
                            $("#recruit-login-showhide").click();
                        }
                    });
                    //Public Computer checkbox handler
                    $("#IsPublicCompter").change(function (e) {
                        $.post(Ellucian.Recruit.Mvc.Data.BasePath + "/Account/TogglePublicComputer", { "isPublic": $(e.target).is(":checked") });
                    });
                    //login wait spinner
                    $("#submitLogin").click(function (e) {
                        if ($("#Username").valid() && $("#Password").valid())
                            Ellucian.Recruit.Mvc.ShowSpinner($("#loginForm").parent());
                    });
                    $("#createAccountLink a").click(function (e) {
                        Ellucian.Recruit.Mvc.ShowSpinner($("#loginForm").parent());
                    });
                }
                Login.LoginSetup = LoginSetup;
                function CreateAccountSetup() {
                    $('form').submit(function (e) {
                        if ($('#createForm').valid()) {
                            Ellucian.Recruit.Mvc.ShowSpinner($("#createForm").parent());
                        }
                    });
                }
                Login.CreateAccountSetup = CreateAccountSetup;
                // for when Recaptcha is Enabled and we want to disable (submit/create/any) button until the user passes the challenge
                function EnableOrDisableButton(buttonId, Enable) {
                    if (Enable === void 0) { Enable = true; }
                    if (!Enable) {
                        $(buttonId).attr('disabled', 'true');
                        $(buttonId).attr('aria-disabled', 'true');
                    }
                    else {
                        $(buttonId).removeAttr('disabled');
                        $(buttonId).removeAttr('aria-disabled');
                    }
                }
                Login.EnableOrDisableButton = EnableOrDisableButton;
            })(Login = Mvc.Login || (Mvc.Login = {}));
        })(Mvc = Recruit.Mvc || (Recruit.Mvc = {}));
    })(Recruit = Ellucian.Recruit || (Ellucian.Recruit = {}));
})(Ellucian || (Ellucian = {}));
//# sourceMappingURL=recruit.login.js.map