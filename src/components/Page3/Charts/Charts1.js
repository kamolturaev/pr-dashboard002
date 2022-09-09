




































// import React from "react";
// import { useForm } from "react-hook-form";

// export default function Charts1() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />
      
//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
      
//       <input type="submit" />
//     </form>
//   );
// }


// import React, {useState} from 'react'

// function Charts1() {
//     const [name, setName]= useState({firstName:'', lastName:'',})
//   return (
  
//     <form>
//         <input 
//         type="text"
//         value={name.firstName}
//         onChanege={e => setName({firstName: e.target.value}) }
//         />
       
//        <input 
//         type='text' 
//         value={name.lastName}
//         onChanege={e => setName({lastName: e.target.value}) }
//         />
//        <h2>Sizning Ismingiz-{name.firstName}</h2>
//        <h2>Sininzg Famelyangiz- {name.lastName}</h2>
       
        
//           </form>
        
         
//   )
// }

// export default Charts1




// import React from 'react'
// const schema = yup.object().shape({
//     firstName: yup.string(). requared(),
//     lastName:yup.string(). requared(),
//     email:yup.string().email().requared(),
//     age:yup.number().positive(),
  
//     confirmPassword:
// })

// function Charts1() {
//   return (
//     <div className="Form">
//      <div className='title'>SignUp</div>
//      <div className='inputs'>
//         <form>
//             <input type="text" name="firstName" placeholder='First Name...'/>
//             <input type="text" name="lastName" placeholder='Last Name...'/>
//             <input type="text" name="email" placeholder='Email...'/>
//             <input type="text" name="age" placeholder='Age...'/>
//             <input type="text" name="password" placeholder='Password...'/>
//             <input
//               type="text"
//               name="confirmPaswword"
//               placeholder=' Confirm Password...  '/>
//               <input type="submet" id="submeit"/>
            

//         </form>
//      </div>
//     </div>
//   )
// }

// export default Charts1








































