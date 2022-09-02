1. Using Ref for Input custom element
   const Input = React.forwardRef((props, ref1) => {})

2. lastname.current.value  [For Ref]
   event.target.value  [For state]
	
3. We can NOT use two dependent state in one function
   But can use two dispatcher
   Because after re-evaluate State will give wrong snapshot
   but Reducer will give the correct one
  
  
4. React.memo() compares the props changes
   & re-evaluate an component if there are changes in props
   It is only for components

5. In JavaScript [1,2]===[1,2] => False
   Same for object and function
   useCallback() prevents new pointer allocations for the same function on every evaluation
    
6. We cant use normal loop or condition inside return
   Thats why we use map() or {!isValid && <h1></h1>}

7. In Redux, Reducer function must be side-effect free & async code free
   Thats why we need action creator Thunk. So we write a code in a redux-slice 
   file which can be written into any other component file and later we can
   dispatch that function from other component.

8. npm install
   - @reduxjs/toolkit
   - react-redux
   - react-router-dom 
   - next react react-dom
   - mongodb

9. This function helps to pre-render a page like if that page 
   has some sort of http request that needs to be resolved
   It is good for SEO
   export async function getStaticProps(context) {
     // fetch data from an API
     return {
       props: {
         meetups: DUMMY_MEETUPS,
       },
       revalidate: 3600  [will re-render on the server in every hour]
     };
   }

10. same as above but it is for most frequently chaanged data
   export async function getServerSideProps(context) {
       const req = context.req;
       const res = context.res;
       // fetch data from an API
       return {
          props: {
           meetups: DUMMY_MEETUPS
         }
       };
     }



11. For dynamic routing
     export async function getStaticPaths() {
       return {
         fallback: false,
         paths: [
           {
             params: {
               meetupId: "m1",
             },
           },
           {
             params: {
               meetupId: "m2",
             },
           },
         ],
       };
     }
  
     export async function getStaticProps(context) {
       // fetch data for a single meetup
  
       const meetupId = context.params.meetupId;
  
       console.log(meetupId);
  
       return {
         props: {
           meetupData: {
             image:
               "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
             id: meetupId,
             title: "First Meetup",
             address: "Some Street 5, Some City",
             description: "This is a first meetup",
           },
         },
       };
     }

     getStaticPaths() only used for getStaticProps()

12. In react parent component CSS influence child component CSS like this div will
    influence all the div of its child component

13. console.log(1) if it prints in terminal then it is on server side 
    if in browser-console then it is on client side 

14. MongoDB code
    import { MongoClient } from "mongodb";

    async function handler(req, res) {
     if (req.method === "POST") {
       const data = req.body;
        const client = await MongoClient.connect(
          "mongodb+srv://rakib:123456Aa@cluster0.f4fx5.mongodb.net/meetup?retryWrites=true&w=majority"
       );
        const db = client.db();
       const meetupsCollection = db.collection("meetup");
        //const result = await meetupsCollection.insertOne(data);    [For CRUD]
        //const meetups = await meetupsCollection.find().toArray();   [For Fetch Data]
        client.close();
        res.status(201).json({ message: "Meetup inserted!" });
     }
    }

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    return {
      fallback: false,
     paths: meetups.map((meetup) => ({
       params: {
          meetupId: meetup._id.toString(),
       },
     })),
    };