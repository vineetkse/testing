import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';

import CommentList from 'components/CommentList';
import comments from '../../reducers/comments';

let wrapped;

beforeEach(() => {
    const intialState = {
        comments: ['Comment One', 'Comment Two']
    };

    wrapped = mount(
        <Root initialState={intialState}>
            <CommentList />
        </Root>
    );
});

it('creates on LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment One');
    expect(wrapped.render().text()).toContain('Comment Two');
});