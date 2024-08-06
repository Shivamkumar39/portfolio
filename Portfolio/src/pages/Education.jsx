import React from 'react';
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { FaReact, FaJs, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { MdManageAccounts } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { BsMicrosoftTeams } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className='text-center font-bold text-2xl mb-6'>Skills / Extra Skills</h1>
      <div className="flex flex-col gap-6 items-center">
        <Card className="p-4 max-h-96 overflow-y-scroll flex flex-col items-center">
          <Typography variant="h5" color="blue-gray" className="mb-4 text-center">
            Tech-Skills
          </Typography>
          <List className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ListItem className="flex items-center justify-center">
              <ListItemPrefix>
                <FaReact className='h-8 w-8'/>
              </ListItemPrefix>
              <div className="ml-4 text-center">
                <Typography variant="h6" color="blue-gray">
                  React.js
                </Typography>
              </div>
            </ListItem>
            <ListItem className="flex items-center justify-center">
              <ListItemPrefix>
                <FaJs className='h-8 w-8'/>
              </ListItemPrefix>
              <div className="ml-4 text-center">
                <Typography variant="h6" color="blue-gray">
                  JavaScript
                </Typography>
              </div>
            </ListItem>
            <ListItem className="flex items-center justify-center">
              <ListItemPrefix>
                <FaHtml5 className='h-8 w-8'/>
              </ListItemPrefix>
              <div className="ml-4 text-center">
                <Typography variant="h6" color="blue-gray">
                  HTML5
                </Typography>
              </div>
            </ListItem>
            <ListItem className="flex items-center justify-center">
              <ListItemPrefix>
                <FaHtml5 className='h-8 w-8'/>
              </ListItemPrefix>
              <div className="ml-4 text-center">
                <Typography variant="h6" color="blue-gray">
                  CSS
                </Typography>
              </div>
            </ListItem>
            <ListItem className="flex items-center justify-center">
              <ListItemPrefix>
                <RiTailwindCssFill className='h-8 w-8'/>
              </ListItemPrefix>
              <div className="ml-4 text-center">
                <Typography variant="h6" color="blue-gray">
                  Tailwind CSS
                </Typography>
              </div>
            </ListItem>
            <ListItem className="flex items-center justify-center">
              <ListItemPrefix>
                <FaNodeJs className='h-8 w-8'/>
              </ListItemPrefix>
              <div className="ml-4 text-center">
                <Typography variant="h6" color="blue-gray">
                  Node.js
                </Typography>
              </div>
            </ListItem>
          </List>
        </Card>


        <Card className="p-4 max-h-96 overflow-y-scroll flex flex-col items-center">
          <Typography variant="h5" color="blue-gray" className="mb-4 text-center">
            ExtraCurricular
          </Typography>
          <List className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ListItem className="flex items-center justify-center">
              <ListItemPrefix>
                <MdManageAccounts className='h-8 w-8'/>
              </ListItemPrefix>
              <div className="ml-4 text-center">
                <Typography variant="h6" color="blue-gray">
                  Placement Co-ordinater
                </Typography>
              </div>
            </ListItem>
            <ListItem className="flex items-center justify-center">
              <ListItemPrefix>
                <HiUserGroup className='h-8 w-8'/>
              </ListItemPrefix>
              <div className="ml-4 text-center">
                <Typography variant="h6" color="blue-gray">
                  Team Work
                </Typography>
              </div>
            </ListItem>
            <ListItem className="flex items-center justify-center">
              <ListItemPrefix>
                <BsMicrosoftTeams className='h-8 w-8'/>
              </ListItemPrefix>
              <div className="ml-4 text-center">
                <Typography variant="h6" color="blue-gray">
                  MS Office
                </Typography>
              </div>
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
