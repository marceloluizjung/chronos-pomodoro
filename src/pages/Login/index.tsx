import { PlayCircleIcon } from "lucide-react";
import { useRef } from "react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Logo } from "../../components/Logo";

export function Login() {
    const userName = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    function handleLogin() {
        debugger;
        console.log(userName);
        console.log(password);
    }

    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <form onSubmit={handleLogin} className='form' action=''>
                    <div className='formRow'>
                        <DefaultInput id='userName' type='text' labelText='Usuário' placeholder='Digite nome do usuário' ref={userName} />
                    </div>
                    <div className='formRow'>
                        <DefaultInput id='password' type='password' labelText='Senha' placeholder='Digite a senha' ref={password} />
                    </div>
                    <div className='formRow'>
                        <DefaultButton
                            aria-label="Entrar"
                            title="Entrar"
                            type='submit'
                            icon={<PlayCircleIcon />}
                            key={'submit'}
                        />
                    </div>
                </form>
            </Container>
        </>
    );
}