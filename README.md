# Node clusters
	- Install nginx for windows
	- edit nginx conf file with the following details
	- ```	upstream projects {
		server localhost:1000;
		server localhost:2000;
		server localhost:3000;
		server localhost:4000;
	}
	
	...
	
	server {
	listen       8070; #80 port might be blocked if anything already running on that port
	server_name  localhost;

	...
	
	location / {
	#root   html;
	#index  index.html index.htm;
	proxy_pass http://projects;    # for configuring list of servers to have the load shared with
	#expires 10m;
	}
	
	# for caching static resources and html files
	location ~* \.(css|js|gif|jpe?g|png|html)$ {
		expires 168h;
	}
	
	```
	- run nginx using ```nginx -s start```
	- if you make any config changes reload the nginx using ```nginx -s reload``` command

Refer the very nice short video on nginx load balancer setup and apache bench _ https://www.youtube.com/watch?v=FJrs0Ar9asY _