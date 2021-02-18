import {useUser} from '../components/User';

export default function OrderPage() {
  const me = useUser();
  if (!me){
    return (<div>
    <p>Hello!</p>
    </div>)
  }
  return(
    <div>
      <h1>Hello {me.name}</h1>
      <h3>Your registered email: {me.email}</h3>
    </div>
  );
  
}

