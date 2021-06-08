import { observer } from 'mobx-react-lite';
import { UserModel } from '../../models/user.model';

interface UserModelExampleInterface {
  user: UserModel;
}
export default observer(function ({ user }: UserModelExampleInterface) {

  return (
    <> 
      <h4>Deep Nested Action for: { user.fullName }</h4>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" value={user.firstName} onChange={e => user.firstName = e.target.value } />        
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" value={user.lastName} onChange={e => user.lastName = e.target.value }/>
      </div>
      <button type="button" onClick={() => user.reset()}>Clear first/last names</button>
    </>
  )
});