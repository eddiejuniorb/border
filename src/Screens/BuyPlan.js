import React from 'react'
import Box from '../Components/Pricing/Box'
import Section from '../Section'

function BuyPlan() {
    return (
        <div className='w-full'>
            <Section>
                {/* Active Plans */}
                <div className="mt-12 py-5">
                    <div>
                        <h1 className="text-3xl font-semibold py-5 text-center">Choose Your Training Session Plan</h1>
                    </div>
                    {/* Price Tags Boxes */}
                    <div className="flex flex-col md:flex-row gap-5 my-10 justify-center">
                        <Box />
                        <Box />
                    </div>
                    <div></div>
                </div>

            </Section>
        </div>
    )
}

export default BuyPlan