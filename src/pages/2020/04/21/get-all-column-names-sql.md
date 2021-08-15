---
title: "How to get all column names for a table in a sql query"
date: "2020-04-21"
---

I always forget how to do this, so I decided I'd write it down.

```sql
SELECT *
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = N'Table_Name'
```

And that's it! Now I can call this query and get all the columns names for a given table without having to dig through some GUI.
