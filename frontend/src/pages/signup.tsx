import React from "react";

import {Footer} from "../components/Footer";
import {MainMenu} from "../components/MeinMenu";
import {Screen, SmColumn} from "../components/layouts";
import {Plate} from "../components/Plate";
import {SignupForm} from "../components/SignupForm";
import {SignupFormData} from "../enitites";

export const SignupPage: React.FC = () => {
    function handleSubmit(form: SignupFormData) {
        console.log(form);
    }

    return (
        <>
            <Screen>
                <MainMenu/>

                <SmColumn>
                    <h1>Registration</h1>

                    <Plate>
                        <SignupForm onSubmit={handleSubmit}/>
                    </Plate>
                </SmColumn>
            </Screen>
            <Footer/>
        </>
    );
};
