import PageLayoutMain from "../components/PageLayoutMain";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {

    return (
        <PageLayoutMain>
            <Header title={"Login"}/>
            <LoginForm />
            <BottomNav/>
        </PageLayoutMain>
    )
}