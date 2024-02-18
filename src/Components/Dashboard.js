import React from 'react'
import Section from '../Section'
import Stat from './Statistics/Stat'
import Container from "../Container"
import { Link } from 'react-router-dom'
import UserCard from './Card/UserCard'

function Dashboard() {
    return (
        <div className='w-full mt-5'>
            <Section>
                {/* Welcome Message */}
                <div className='relative pt-10 pb-5'>
                    <h1 className="text-4xl font-semibold text-orange-600">Welcome back!</h1>
                    <p className="mt-0.5 font-medium text-lg">John Doe</p>
                </div>

                {/* Statistics Container */}

                <div className='mt-10 flex flex-col md:flex-row items-center gap-5'>
                    <Stat />
                    <Stat />
                </div>

                {/* Links Children */}
                <div className="w-full mt-16">
                    <Container>
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-semibold py-5">Linked Children </h1>
                            <Link to='/add-beneficial' className='text-sm inline-flex bg-orange-500 py-3 px-5 font-medium rounded-full
                         text-white transition hover:bg-black'>Add Children</Link>
                        </div>

                        {/* Users */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                        </div>
                    </Container>
                </div>
            </Section>
        </div>
    )
}

export default Dashboard