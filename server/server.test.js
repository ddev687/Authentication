const expect=require('expect');
const request=require('supertest');

const {app}=require('./server');
const {stud}=require('./models/stud');

describe('Post/stud',()=>{
	it('Create New Stud',()=>{
		vat name="Hemin";
		request(app)
		.post(/stud)
		.send({name})
		.expect(200)
		.expect((res)=>{
			expect(res.body.name).toBe(name);
		})
		.end((err,res)=>{
			stud.find().then(()=>{
				
			})
		})
	});
});
