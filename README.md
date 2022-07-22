# ft_transcendence

Step 1:
create and modify local env file

```shell
cp .env_template .env
```

add FTUID & FTSECRET from 42 intranet API
add JWT_SECRET=secret

Step 2:
modify the main.ts file in back-end/src
line(12): user: 'kev_ye', To your user