import React from 'react'
import Section from '../Section'
import Text from '../Forms/Text'
import Radio from '../Forms/Radio'

function CreateChildren() {


    return (
        <div className='w-full pb-10'>
            <Section>
                <div className="mx-auto max-w-7xl">

                    {/* <h1 className='text-2xl font-medium'>FIll the forms bellow</h1>
                    <small></small> */}

                    {/* Form Data */}
                    <div className="mt-10 flex flex-col gap-10">
                        <div>
                            <h3 className='font-semibold mb-2'>Child Information:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                <Text title='Childs Name' id='name' />
                                <Text title="Date of birth" id='dob' placeHolder='MM/DD/YY' />
                            </div>

                            {/* Uniform */}
                            <div className="mt-7">
                                <div>
                                    <p className='text-orange-800'> Does your child have a border sports academy uniform from a previous enrolment? </p>
                                </div>
                                <div className="mt-2 flex flex-col gap-1.5">
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='uniform' /> Yes
                                    </div>
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='uniform' /> No
                                    </div>
                                </div>
                            </div>

                            {/* Medical */}
                            <div className="mt-7">
                                <div>
                                    <p className='text-orange-800'>Does your child/children have any existing or previous medical conditions?</p>
                                </div>
                                <div className="mt-2 flex flex-col gap-1.5">
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='medical' /> Yes
                                    </div>
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='medical' /> No
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Parent or Guardian */}
                        <div>
                            <h3 className='font-semibold mb-2'>Parent or Guardian Information:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                <Text title='Parent/Guardian Name' id='pgname' />
                                <Text title="Address" id='pgaddress' />
                                <Text title="Email" id='pgemail' />
                                <Text title="Phone" id='pgphone' />
                                <Text title="Emergency Contact Details" id='pgcontactdetails' />
                                <Text title="Emergency contact name" id='pgcontactname' />
                                <Text title="Emergency contact phone number" id='pgcontactphone' />
                                <Text title="Relationship to the child" id='pgcontactname' />
                            </div>
                        </div>

                        {/* More Info ///////////////////////////////////////////////////////// */}

                        <div>
                            {/* Seek Medical Attention */}
                            <div className="mt-7">
                                <div>
                                    <p className='text-orange-800'>Do you give border sports academy to seek medical attention in an emergency? </p>
                                </div>
                                <div className="mt-2 flex flex-col gap-1.5">
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='uniform' /> Yes
                                    </div>
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='uniform' /> No
                                    </div>
                                </div>
                            </div>

                            {/* Ambulance Cover */}
                            <div className="mt-7">
                                <div>
                                    <p className='text-orange-800'>Do you have ambulance cover? </p>
                                </div>
                                <div className="mt-2 flex flex-col gap-1.5">
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='uniform' /> Yes
                                    </div>
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='uniform' /> No
                                    </div>
                                </div>
                            </div>

                            {/* travelling tournament */}
                            <div className="mt-7">
                                <div>
                                    <p className='text-orange-800'>Are you interested in joining a border sports team and travelling to 4 tournaments a year with border sports
                                        academy?
                                    </p>
                                </div>
                                <div className="mt-2 flex flex-col gap-1.5">
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='uniform' /> Yes
                                    </div>
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='uniform' /> No
                                    </div>
                                </div>
                            </div>


                            {/* travelling tournament */}
                            <div className="mt-7">
                                <div>
                                    <p className='text-orange-800'>Do you provide approval for photo’s of your child/children to be taken and could be used for
                                        promotions and social media?
                                    </p>
                                </div>
                                <div className="mt-2 flex flex-col gap-1.5">
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='uniform' /> Yes
                                    </div>
                                    <div className='flex gap-2 items-center text-sm'>
                                        <Radio name='uniform' /> No
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='my-10' />

                    {/* Submit Button */}
                    <div className="w-full">
                        <button to='/add-beneficial' className='text-sm inline-flex bg-orange-500 py-3 px-5 font-medium rounded-full
                         text-white transition hover:bg-black'>Submit Form</button>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default CreateChildren