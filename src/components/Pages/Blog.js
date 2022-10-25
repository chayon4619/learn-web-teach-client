import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='px-4 py-16 col-span-9 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title"> what is cors?</h2>
                            <p>CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.
                                The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-info text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title"> Why are you using firebase? What other options do you have to implement authentication?</h2>
                            <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.</p>
                            <p>
                                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                            </p>
                        </div>
                    </div>
                    <div className="card w-96 bg-secondary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">  How does the private route work?</h2>
                            <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                                The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">  What is Node? How does Node work?</h2>
                            <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                                <br />
                                <br />
                                <span className='font-bold'> Working of Node.js:</span> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;