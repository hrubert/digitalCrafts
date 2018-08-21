-- projects using js
-- SELECT * FROM tech
-- JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id
-- JOIN project on project_uses_tech.project_id = project.id
-- WHERE tech.name = 'JavaScript';

-- Technologies used by personal website
-- SELECT * FROM tech
-- JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id
-- JOIN project on project_uses_tech.project_id = project.id
-- WHERE project.name = 'Personal Website';

-- left outer join and count of tech per project
-- SELECT * 
-- FROM
--     tech
-- LEFT OUTER JOIN
--     project_uses_tech on tech.id = project_uses_tech.tech_id;

-- SELECT
--     tech.name,
--     count(project_uses_tech.tech_id)
-- FROM
--     tech
-- LEFT OUTER JOIN
--     project_uses_tech on tech.id = project_uses_tech.tech_id
-- GROUP BY
--     tech.name;

-- Which projects have no associated techs
-- SELECT * 
-- FROM
--     project
-- LEFT OUTER JOIN
--     project_uses_tech on project.id = project_uses_tech.project_id;

-- all projects along with each tech used by it
-- SELECT * FROM project
-- JOIN project_uses_tech ON project_uses_tech.project_id = project.id
-- JOIN tech ON project_uses_tech.tech_id = tech.id;

-- List all the distinct techs that are used by at least one project.

-- SELECT distinct(name) FROM tech 
-- JOIN project_uses_tech on project_uses_tech.tech_id = tech.id;

-- List all the distinct techs that are not used by any projects.

-- SELECT distinct(name) FROM tech 
-- LEFT OUTER JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id
-- WHERE project_id is NULL;

-- List all the distinct projects that use at least one tech.
-- SELECT DISTINCT(name) FROM project
-- JOIN project_uses_tech on project_uses_tech.project_id = project.id;

-- List all the distinct projects that use no tech.
-- SELECT DISTINCT(name) FROM project
-- LEFT OUTER JOIN project_uses_tech ON project_uses_tech.project_id = project.id 
-- WHERE tech_id is NULL;

-- Order the projects by how many tech it uses.

-- SELECT
--     project.name
-- FROM
--     project
-- LEFT OUTER JOIN
--     project_uses_tech on project.id = project_uses_tech.project_id
-- GROUP BY
--     project.name
-- ORDER BY
--     count(project_uses_tech.project_id) DESC;

-- Order the tech by how many projects use it.
-- SELECT
--     tech.name
-- FROM
--     tech
-- LEFT OUTER JOIN
--     project_uses_tech on tech.id = project_uses_tech.tech_id
-- GROUP BY
--     tech.name
-- ORDER BY
--     count(project_uses_tech.tech_id) DESC;

-- average number of techs used by a project
-- SELECT
--     avg(count)
-- FROM
--     (SELECT
--             project.id,
--             project.name,
--             count(tech_id)
--         FROM
--             project
--         LEFT OUTER JOIN
--             project_uses_tech on project.id = project_uses_tech.project_id
--         GROUP BY
--             project.id) AS tech_counts;
