import React from 'react'
import Alert from './config'

const UserTable = props => (
	<center>
		<table class="table table-bordered">
		<thead>
			<tr className="tab">
				<th>id</th>
				<th>Nom</th>
				<th>Prenom</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>
							<button className="btn btn-danger" onClick={this.submit}>X</button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}>Nos list</td>
				</tr>
			)}
		</tbody>
	</table>
	</center>
	
)

export default UserTable