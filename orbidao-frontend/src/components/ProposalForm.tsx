'use client'
import React, { useState } from 'react';
import { Card } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";


const ProposalForm = () => {
    const [proposalName, setProposalName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log({
            proposalName,
            description
        });
    };

    return (
        <div className="flex flex-col items-center w-full px-10">
            {/* Breadcrumb Navigation */}
            <div className="self-center m-5 text-lg w-full max-w-4xl">
                <span className="text-blue-500 cursor-pointer">Home</span>
                <span className="mx-2">{'>'}</span>
                <span className="text-blue-500 cursor-pointer">WBTC DAO</span>
                <span className="mx-2">{'>'}</span>
                <span>Create proposal</span>

                {/* New Proposal Heading */}
                <h2 className="text-2xl font-bold mt-5  self-center">New Proposal</h2>

            </div>

            {/* Proposal Form */}
            <Card shadow="lg" className="w-full max-w-4xl p-5">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="mb-3 flex items-center">
                        <label className="text-sm font-medium text-white w-1/5">
                            Proposal Name
                        </label>
                        <Input
                            className=""
                            placeholder="Give your proposal a name"
                            value={proposalName}
                            onChange={(e) => setProposalName(e.target.value)}
                        />
                    </div>
                    <Divider className="my-4" />
                    <div className="mb-4 flex flex-col">
                        <label className="text-sm font-extrabold text-white mb-2">
                            Description
                        </label>
                        <Textarea
                            labelPlacement="outside"
                            className=""
                            placeholder="Give your proposal a description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <Button color="primary" onClick={handleSubmit}>
                        Add Action
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default ProposalForm;
