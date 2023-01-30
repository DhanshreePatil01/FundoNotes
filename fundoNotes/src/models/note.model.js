import boolean from "@hapi/joi/lib/types/boolean";
import { Schema,model } from "mongoose";

const noteSchema =new Schema(
    {
        title: {
            type: String
          },
        description: {
            type: String
          },
        color: {
            type: String
          },
        archieve: {
            type: boolean
          },  
        trash: {
            type: boolean
          },
        userId: {
            type: String
        }
    }
);

export default model('Note',noteSchema);