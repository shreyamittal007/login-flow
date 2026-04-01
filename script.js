document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // Mobile toggles
    const mobileSignUpBtn = document.getElementById('mobile-signUp');
    const mobileSignInBtn = document.getElementById('mobile-signIn');

    // Desktop overlay animations
    if (signUpButton && signInButton && container) {
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }

    // Mobile interactions
    if (mobileSignUpBtn && mobileSignInBtn && container) {
        mobileSignUpBtn.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.add("right-panel-active");
        });

        mobileSignInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.remove("right-panel-active");
        });
    }
});
