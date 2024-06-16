'use client'
import {AccountForm} from "@/app/auth/register/account-form/AccountForm";
import {EnterpriseForm} from "@/app/auth/register/enterprise-form/EnterpriseForm";
import {VerifyAccount} from "@/app/auth/register/verify-account/VerifyAccount";
import {MailForm} from "@/app/auth/register/mail-form/MailForm";
import {useStepperStore} from "@/stores/stepper.store";
export const RegisterForm = () => {
    const { step } = useStepperStore();

    return (
        <div>
            {/*form*/}
            {step === 1 ? (
                <AccountForm />
            ) : step === 2 ? (
                <EnterpriseForm />
            ) : step === 3 ? (
                <VerifyAccount />
            ) : (
                <MailForm />
            )}
            {/*form*/}
        </div>
    )
}