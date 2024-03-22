import React from "react";
import SkillBar from "../layout/skill-bar";

import classes from "./skills-component.module.scss";
import { SkillsData } from "@/store/skill-data";

const SkillsComponent = () => {
  return (
    <div className="row w-100">
      <div className="col-md-4"></div>
      <div className={`col-md-8 ${classes.skillSection}`}>
        <div className="row">
          <div className="col-md-12">
            <p className={classes.sectionTitle}>Skills</p>
          </div>
        </div>
        {SkillsData &&
          SkillsData.map((skill) => (
            <SkillBar
              key={skill.id}
              skillTitle={skill.skillTitle}
              skillScore={skill.skillScore}
            />
          ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
