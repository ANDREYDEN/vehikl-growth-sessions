import {mount, Wrapper} from "@vue/test-utils";
import MobView from "./MobView.vue";
import userJson from '../../../tests/fixtures/User.json';
import mobJson from '../../../tests/fixtures/SocialMobWithComments.json'
import {User} from "../classes/User";

describe('MobView', () => {
    let wrapper: Wrapper<MobView>;

    beforeEach(() => {
        wrapper = mount(MobView, {propsData: {user: userJson, mobJson}});
    });

    it('redirects to the owners GitHub page when clicked on the profile', async () => {
        const ownerComponent = wrapper.findComponent({ref: 'owner-avatar-link'})

        expect(ownerComponent.element).toHaveAttribute('href', new User(mobJson.owner).githubURL)
    })

    describe('attendees section', () => {
        it('redirects to the attendees GitHub page when clicked on the profile', async () => {
            const attendeeComponents = wrapper.findAllComponents({ref: 'attendee'})

            attendeeComponents.wrappers.forEach((attendeeComponent, i) =>
                expect(attendeeComponent.element).toHaveAttribute('href', new User(mobJson.attendees[i]).githubURL)
            )
        })
    })
})
