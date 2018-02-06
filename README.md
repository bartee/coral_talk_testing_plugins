# coral_talk_testing_plugins
A few simple plugins to get a hang of Talk's plugin basics.

Just a few tryouts for getting plugins to work. Yet, it failed. Here's how:

- 1 in ``talk/plugins``, created a symlink to either of these plugins.
- 2 in .env (where our environment vars live, added ``TALK_PLUGINS_JSON='{, "client": ["avatar, "nunl-multilevel-authentication"]}'``.
- 3 in ``talk``, ran ``yarn run build`` followed by ``yarn run watch``
- 4 in a second screen, ran ``yarn run start:development``.
- 5 After updating TALK_PLUGINS_JSON, stopped both screens mentioned in 3 and 4 as to be able to reload the environment variables, and executed 3 and 4 again.
